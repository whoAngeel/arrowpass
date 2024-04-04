import { FaGoogle } from "react-icons/fa6";
import { BsSlash } from "react-icons/bs";
import { IoKeySharp } from "react-icons/io5";
import { useFormik } from "formik";
import { z } from "zod";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const suscriberSchema = z.object({
	email: z
		.string({ required_error: "El email es requerido" })
		.email({ message: "Debe ser un correo valido" }),
	password: z.string({ required_error: "La contraseña es requerida" }),
});

// type Suscriber = z.infer(<type)

const Login = () => {
	const navigate = useNavigate();

	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			setIsLoading(true);
			axios({
				method: "POST",
				url: "/api/auth/login/local",
				data: values,
			})
				.then((res) => {
					// console.log(res.data.token);
					localStorage.setItem("userToken", res.data.token);
					// console.log(res.data.user);
					localStorage.setItem("user", JSON.stringify(res.data.user));
					console.log("logged in");
					navigate("/");
				})
				.catch((error) => {
					if (error.response.status === 401)
						toast({
							title: "Las credenciales de inicio de sesión son incorrectas",
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
		<div>
			<h1 className="text-center text-4xl font-bold phone:mt-5 phone:text-xl">
				Bienvenido de Vuelta
			</h1>
			<p className="text-center pt-5 phone:mx-2  phone:text-base">
				Inicia sesión y descubre todo lo nuevo que tenemos para ti
			</p>
			<div className="flex justify-center phone:flex-col flex-row w-[300px] phone:mx-auto">
				{/* className="w-[300px] phone:mx-auto" */}
				<form onSubmit={formik.handleSubmit}>
					<label className="input input-bordered flex items-center gap-2 mt-5">
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

					<label className="text-xs text-error">
						{formik.errors.email}
					</label>
					<label className="input input-bordered flex items-center gap-2 mt-5">
						<label>
							<IoKeySharp />
						</label>

						<input
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							type="password"
							className="grow"
							placeholder="**********"
						/>
					</label>
					<label className="text-xs text-error">
						{formik.errors.password}
					</label>
					<button
						disabled={isLoading}
						type="submit"
						className="btn btn-active btn-primary mt-5 mx-auto w-full"
					>
						Entrar
					</button>
					<BsSlash className="my-auto text-5xl mx-10 phone:hidden" />
					<div className="w-[300px] phone:mx-auto">
						<a className="btn w-full mt-5 ">
							<FaGoogle />
							Continuar con Google
						</a>
					</div>
				</form>
			</div>
			<p className="text-center mt-9">
				<Link
					to={"/recovery/send-email"}
					className="btn btn-link text-amber-500"
				>
					¿Olvidaste tu contraseña?
				</Link>
			</p>
		</div>
	);
};

export default Login;
