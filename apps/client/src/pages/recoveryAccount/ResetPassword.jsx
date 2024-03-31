import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function ChangePassword() {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			newPassword: "",
			confirmPassword: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.newPassword) {
				errors.newPassword = "La nueva contraseña es requerida";
			} else if (values.newPassword.length < 8) {
				errors.newPassword =
					"La contraseña debe tener al menos 8 caracteres";
			}
			if (!values.confirmPassword) {
				errors.confirmPassword = "Confirma tu nueva contraseña";
			} else if (values.confirmPassword !== values.newPassword) {
				errors.confirmPassword = "Las contraseñas no coinciden";
			}
			return errors;
		},
		onSubmit: async (values) => {
			setIsLoading(true);
			try {
				const response = await axios.post(
					"/api/auth/change-password",
					values
				);
				if (response.status === 200) {
					toast({
						title: "Contraseña actualizada exitosamente",
						status: "success",
						variant: "subtle",
						position: "top",
						isClosable: true,
					});
					formik.resetForm();
				}
			} catch (error) {
				console.error(error);
				toast({
					title: "Error al actualizar la contraseña",
					status: "error",
					variant: "subtle",
					position: "top",
					isClosable: true,
				});
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<div>
			<h1 className="text-center text-4xl font-bold phone:mt-5 phone:text-xl">
				Actualizar Contraseña
			</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className="flex justify-center phone:flex-col flex-row w-[300px] phone:mx-auto">
					<div className="relative">
						<div className="my-2">
							<label
								className="block text-gray-700 text-sm font-bold mb-1"
								htmlFor="newPassword"
							>
								Nueva contraseña:
							</label>
							<input
								value={formik.values.newPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="newPassword"
								type="password"
								placeholder="Nueva contraseña"
							/>
						</div>
						{formik.touched.newPassword && formik.errors.newPassword && (
							<label className="text-xs text-error absolute">
								{formik.errors.newPassword}
							</label>
						)}
					</div>
					<div className="relative">
						<div>
							<label
								className="block text-gray-700 text-sm font-bold mt-5"
								htmlFor="confirmPassword"
							>
								Confirmar contraseña:
							</label>

							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Confirmar Contraseña"
							/>
						</div>
						{formik.touched.confirmPassword &&
							formik.errors.confirmPassword && (
								<label className="text-xs text-error absolute">
									{formik.errors.confirmPassword}
								</label>
							)}
					</div>
					<button
						disabled={isLoading}
						type="submit"
						className="mt-9 btn btn-active btn-primary mx-auto w-full"
					>
						{isLoading ? "Cargando..." : "Actualizar Contraseña"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ChangePassword;
