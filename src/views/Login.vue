<template>
	<div>
		<!-- <link rel="stylesheet" href="assets/dist/css/AdminLTE.min.css"> -->
		<link rel="stylesheet" href="assets/custom.css">
		<div class="login-box">
			<div class="login-logo">
				<a href="../../index2.html"><b>Canopus</b>UI</a>
			</div>
			<!-- /.login-logo -->
			<div class="login-box-body">
				<p class="login-box-msg">Sign in to start your session</p>

				<form v-on:submit.prevent="onSubmit(username, password);" >
					<div class="form-group has-feedback">
						<input v-model="username" class="form-control" placeholder="Username">
						<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
					</div>
					<div class="form-group has-feedback">
						<input type="password" v-model="password" class="form-control" placeholder="Password">
						<span class="glyphicon glyphicon-lock form-control-feedback"></span>
					</div>
					<div class="row">
						<div class="col-xs-8">
							<div class="checkbox icheck">
								<label>
									<input type="checkbox"> Remember Me
								</label>
							</div>
						</div>
						<!-- /.col -->
						<div class="col-xs-4">
							<button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
						</div>
						<!-- /.col -->
					</div>
				</form>

				<a href="#">I forgot my password</a><br>
				<a href="register.html" class="text-center">Register a new membership</a>

			</div>
			<!-- /.login-box-body -->
		</div>
	</div>
</template>
<!-- iCheck -->
<script src="../../plugins/iCheck/icheck.min.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  });
</script>
<script>
import { LOGIN } from "@/store/actions.type";
export default {
	name: "Login",
	data() {
		return {
			username: null,
			password: null
		};
	},
	methods: {
    onSubmit(username, password) {
      this.$store
        .dispatch(LOGIN, { username, password })
		.then(() =>{ 
			window.location.href = "/";
		});
    }
  },
}
</script>