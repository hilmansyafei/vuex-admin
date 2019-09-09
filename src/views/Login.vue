<style scoped>
.lds-ellipsis div {
  background: #3c8dbc;
}
</style>
<template>
	<div>
		<div class="login-box">
			<div class="login-logo animated fadeInUp">
				<a href="../../index2.html"><b>Canopus</b>UI</a>
			</div>
			<!-- /.login-logo -->
			<div class="login-box-body animated fadeInUp">
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
							<button id="login" type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
							<!-- <div id="login-loading" class="lds-ring" style="display:none"><div></div><div></div><div></div><div></div></div> -->
							<div id="login-loading" style="display:none" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
						</div>
						<!-- /.col -->
					</div>
				</form>

				<a href="#">I forgot my password</a><br>

			</div>
			<!-- /.login-box-body -->
		</div>
	</div>
</template>
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
			$("#login").hide();
			$("#login-loading").show();
			this.$store
				.dispatch(LOGIN, { username, password })
				.then(() =>{ 
				window.location.href = "/";
			}).catch(() => {
				$("#login").show();
				$("#login-loading").hide();
			});
    }
	}
}
</script>