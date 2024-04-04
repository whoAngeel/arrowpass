import { useFormik } from "formik";
import { z } from "zod";
import axios from "axios";
import { CiMail } from "react-icons/ci";
import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const suscriberSchema = z.object({
	email: z
		.string({ required_error: "El email es requerido" })
		.email({ message: "Debe ser un correo valido" }),
});

function SendEmail() {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [timeLeft, setTimeLeft] = useState(0);
	useEffect(() => {
		// Empieza la cuenta regresiva al enviar el formulario
		let timer;
		if (timeLeft > 0 && isButtonDisabled) {
			timer = setTimeout(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
		} else {
			setIsButtonDisabled(false);
		}

		return () => clearTimeout(timer);
	}, [timeLeft, isButtonDisabled]);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			setIsLoading(true);
			axios({
				method: "POST",
				url: "/api/auth/recovery",
				data: values,
			})
				.then((res) => {
					// console.log(res);
					if (res.status === 200)
						toast({
							title: "Le hemos enviado un correo, por favor revise su bandeja de entrada",
							status: "info",
							variant: "subtle",
							position: "top",
							isClosable: true,
						});
					setIsButtonDisabled(true);
					setTimeLeft(60);
				})
				.catch((error) => {
					// console.log(error);
					if (error.response.status === 401)
						toast({
							title: "Error al enviar el correo",
							status: "error",
							variant: "subtle",
							position: "top",
							isClosable: true,
						});
					else if (error.response.status === 404)
						toast({
							title: "Error: El correo no fue encontrado",
							status: "error",
							variant: "subtle",
							position: "top",
							isClosable: true,
						});
				});
			setIsLoading(false);
		},
		validate: (values) => {
			const result = suscriberSchema.safeParse(values);
			if (result.success) return;
			console.log(result.error.issues);
			const errors = {};
			result.error.issues.forEach((error) => {
				errors[error.path[0]] = error.message;
			});
			return errors;
		},
	});
	return (
		<>
			<div>
				<h1 className="text-center text-4xl font-bold phone:mt-5 phone:text-xl">
					Recuperación de Contraseña
				</h1>
				<p className="text-center pt-5 phone:mx-2  phone:text-sm">
					Por favor, introduce tu dirección de correo electrónico asociada
					a tu cuenta. Te enviaremos un enlace para restablecer tu
					contraseña.
				</p>
				<div className="flex justify-center phone:flex-col flex-row w-[300px] phone:mx-auto">
					{/* className="w-[300px] phone:mx-auto" */}
					<form onSubmit={formik.handleSubmit}>
						<div className="relative">
							<label className="input input-bordered flex items-center gap-2 mt-5 phone:text-sm">
								<label>
									<CiMail />
								</label>
								<input
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									type="text"
									className="grow"
									placeholder="Email"
								/>
							</label>
							<label className="text-xs text-error absolute">
								{formik.errors.email}
							</label>
						</div>
						<button
							disabled={isLoading || isButtonDisabled}
							type="submit"
							className="mt-9 btn btn-active btn-primary mx-auto w-full"
						>
							{isButtonDisabled
								? `Intenta de nuevo en ${timeLeft} segundos`
								: "Obtener correo"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default SendEmail;
