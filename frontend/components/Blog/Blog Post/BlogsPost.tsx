import { ThemeProvider, Grid, Hidden, Typography, Button } from "@mui/material";
import theme from "../../../src/theme";
import { useStyles } from "./BlogStyles";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BerhasilPop from "../../Popup/BerhasilPop";
import GagalPop from "../../Popup/GagalPop";
import Swal from "sweetalert2";

const BlogPost = () => {
	const styles = useStyles();
	const router = useRouter();
	const pid = router.query.id;
	const [blogs, setBlogs] = useState<any>([]);

	useEffect(() => {
		getBlogs();
	}, []);

	const numDaysBetween = function (d1: any) {
		var hariini = new Date().getTime();
		var today = hariini / 1000;
		var diff = Math.abs(d1 - today);
		return Math.trunc(diff / (60 * 60 * 24));
	};

	const getBlogs = async () => {
		await axios
			.get(`http://localhost:5000/blogs/${pid}`)
			.then((res) => {
				if (res.data) {
					const data = res.data;
					setBlogs(data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteBlogs = async () => {
		await axios
			.delete(`http://localhost:5000/blogs/${pid}`)
			.then((res) => {
				const Berhasil = "Blogs berhasil dihapus!";
				BerhasilPop(Berhasil);
				router.push("/blog");
			})
			.catch((err) => {
				const Gagal = "Blogs gagal dihapus! Silahkan coba lagi!";
				GagalPop(Gagal);
				console.log(err);
			});
	};

	const deletePop = () => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success",
			},
		});

		swalWithBootstrapButtons
			.fire({
				title: "Anda Yakin?",
				text: "Blog yang dihapus tidak bisa kembali lagi!",
				icon: "warning",
				iconColor: "Red",
				showCancelButton: true,
				confirmButtonText: "Delete Blog",
				confirmButtonColor: "Red",
				cancelButtonText: "Cancel",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					deleteBlogs();
					swalWithBootstrapButtons.fire({
						title: "Deleted",
						text: "Blog berhasil dihapus!",
						icon: "success",
						iconColor: "Green",
						confirmButtonText: "OK",
						confirmButtonColor: "Green",
					});
				}
			});
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					className={styles.body}
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Hidden mdDown>
						<Grid item md={6} xs={0}>
							<Grid
								container
								direction="row"
								justifyContent="flex-end"
								alignItems="flex-end"
							>
								<Grid item sx={{ minWidth: "80%" }}>
									<Image
										src="/SALY.png"
										width={0}
										height={0}
										layout="responsive" // width={200}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
					<Grid item md={6} xs={12}>
						<Grid
							container
							direction="row"
							justifyContent="center"
							alignItems="center"
							spacing={1}
							sx={{ marginLeft: 0 }}
						>
							<Grid item xs={12}>
								<Typography sx={{ fontSize: "64px", lineHeight: "77px" }}>
									{blogs.title}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography sx={{ fontSize: "30px" }}>
									{blogs.description}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography sx={{ color: "#737373" }}>
									By {blogs.author} ·{" "}
									{numDaysBetween(blogs.createdAt) == 0 && <>Today</>}
									{numDaysBetween(blogs.createdAt) != 0 && (
										<>{numDaysBetween(blogs.createdAt)}d ago</>
									)}
								</Typography>
							</Grid>
							<Grid item xs={12} sx={{ marginBottom: 3 }}>
								<Typography sx={{ fontSize: "24px", lineHeight: "30px" }}>
									{blogs.content}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Grid
									container
									direction="row"
									// justifyContent="space-between"
									justifyContent="center"
									alignItems="center"
									spacing={3}
								>
									<Grid item>
										<Button
											className={styles.button}
											onClick={() => {
												router.push(`/blog/${pid}/edit`);
											}}
										>
											<Typography>Edit</Typography>
										</Button>
									</Grid>
									<Grid item>
										<Button className={styles.button} onClick={deletePop}>
											<Typography>Delete</Typography>
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
};

export default BlogPost;
