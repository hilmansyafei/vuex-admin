<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">Method Management</h3>
          <Breadcrumb :breadCrumbs="breadCrumbs" />
        </div>
      </div>
    </div>

    <div class="m-content">
      <!--Begin::Main Portlet-->
			<div class="m-portlet m-portlet--full-height">
  			<!--begin: Portlet Head-->
  			<div class="m-portlet__head">
  				<div class="m-portlet__head-caption">
  					<div class="m-portlet__head-title">
  						<h3 class="m-portlet__head-text">
  							Method Registration
  							<small>
  								form wizard example
  							</small>
  						</h3>
  					</div>
  				</div>
  			</div>
  			<!--end: Portlet Head-->

        <!--begin: Form Wizard-->
				<div class="m-wizard m-wizard--2 m-wizard--success" id="m_wizard">
  				<!--begin: Message container -->
  				<!-- <div class="m-portlet__padding-x"> -->
  					<!-- Here you can put a message or alert -->
  				<!-- </div> -->
  				<!--end: Message container -->

          <!--begin: Form Wizard Head -->
          <div class="m-wizard__head m-portlet__padding-x">
  					<!--begin: Form Wizard Progress -->
  					<div class="m-wizard__progress">
  						<div class="progress">
  							<div class="progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  						</div>
  					</div>
  					<!--end: Form Wizard Progress -->

            <!--begin: Form Wizard Nav -->
						<div class="m-wizard__nav">
							<div class="m-wizard__steps">
								<div class="m-wizard__step m-wizard__step--current"  data-wizard-target="#m_wizard_form_step_1">
									<a href="#"  class="m-wizard__step-number">
										<span>
											<i class="fa  flaticon-placeholder"></i>
										</span>
									</a>
									<div class="m-wizard__step-info">
										<div class="m-wizard__step-title">
											1. Method Information
										</div>
										<div class="m-wizard__step-desc">
											Basic information
										</div>
									</div>
								</div>
								<div class="m-wizard__step" data-wizard-target="#m_wizard_form_step_2">
									<a href="#" class="m-wizard__step-number">
										<span>
											<i class="fa  flaticon-layers"></i>
										</span>
									</a>
									<div class="m-wizard__step-info">
										<div class="m-wizard__step-title">
											2. Method Conditions
										</div>
										<div class="m-wizard__step-desc">
											Method conditions
										</div>
									</div>
								</div>
                <div class="m-wizard__step" data-wizard-target="#m_wizard_form_step_3">
									<a href="#" class="m-wizard__step-number">
										<span>
											<i class="fa  flaticon-layers"></i>
										</span>
									</a>
                  <div class="m-wizard__step-info">
										<div class="m-wizard__step-title">
											3. Confirmation
										</div>
										<div class="m-wizard__step-desc">
											Data confirmation
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--end: Form Wizard Nav -->
					</div>
          <!--end: Form Wizard Head -->

          <!--begin: Form Wizard Form-->
					<div class="m-wizard__form">
            <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">
              <!--begin: Form Body -->
							<div class="m-portlet__body">
                <div class="m-wizard__form-step" id="m_wizard_form_step_1">
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="m-form__section m-form__section--first">
                        <div class="m-form__heading">
                          <h3 class="m-form__heading-title">
                            Method Details
                          </h3>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Merchant ID:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="M-0001" disabled>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Payment Method:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <select name="country" class="form-control m-input" v-on:change="changeComponent">
                              <option value="">
                                Select
                              </option>
                              <option value="BCAM" selected>
                                BCA Virtual Account - Midtrans
                              </option>
                              <option value="BCAD">
                                BCA Virtual Account - Direct
                              </option>
                              <option value="BCA">
                                BCA Bank Transfer
                              </option>
                              <option value="BCA">
                                BNI Credit Card
                              </option>
                              <option value="BCA">
                                Kredivo
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Key:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="BCAVACLOSED" />
                            <span class="m-form__help">
                              Please enter your method key
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Name:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="BCA Virtual Account CLOSED">
                            <span class="m-form__help">
                              Please enter your method names
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            Description:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <textarea class="form-control m-input">Sepulsa BCA Virtual Account Close payment method</textarea>
                            <span class="m-form__help">
                              Please enter description
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="m-separator m-separator--dashed m-separator--lg"></div>
                      <!-- <div class="m-form__section">
                        <div class="m-form__heading">
                          <h3 class="m-form__heading-title">
                            Method Settings
                          </h3>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Prefix:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="CANBCAVA-" />
                            <span class="m-form__help">
                              Please enter your method key
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Url:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="https://api.sandbox.midtrans.com/v2" />
                            <span class="m-form__help">
                              Please enter your method key
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Client Key:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="SB-Mid-client-sdubvuds938-j" />
                            <span class="m-form__help">
                              Please enter your method key
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Server Key:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="text" name="name" class="form-control m-input" placeholder="" value="SB-Mid-server-biuc9834c3nc34" />
                            <span class="m-form__help">
                              Please enter your method key
                            </span>
                          </div>
                        </div>
                      </div> -->

                      <FormDynamic :dataMenu="field" />

                    </div>
                  </div>
                </div>

                <div class="m-wizard__form-step" id="m_wizard_form_step_2">
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="m-form__section m-form__section--first">
                        <div class="m-form__heading">
                          <h3 class="m-form__heading-title">
                            Method Conditions
                          </h3>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Minimum Amount:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input type="number" name="name" class="form-control m-input" placeholder="10000" value="">
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Status Notification:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <div class="m-checkbox-inline">
                              <label class="m-checkbox">
                        				<input type="checkbox" name="vatNotification" value="1" class="flat-red"> Pending
                        				<span></span>
                        			</label>
                              <label class="m-checkbox">
                        				<input type="checkbox" name="vatNotification" value="1" class="flat-red"> Settlement
                        				<span></span>
                        			</label>
                              <label class="m-checkbox">
                        				<input type="checkbox" name="vatNotification" value="1" class="flat-red"> Expired
                        				<span></span>
                        			</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-3 col-form-label">
														Get Method without amount
													</label>
													<div class="col-3">
														<span class="m-switch m-switch--outline m-switch--icon m-switch--success">
															<label>
																<input type="checkbox" checked="checked" name="">
																<span></span>
															</label>
														</span>
													</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

								<div class="m-wizard__form-step" id="m_wizard_form_step_3">
									<div class="row">
										<div class="col-xl-8 offset-xl-2">
											<ul class="nav nav-tabs m-tabs-line--2x m-tabs-line m-tabs-line--danger" role="tablist">
												<li class="nav-item m-tabs__item">
													<a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_form_confirm_1" role="tab">
														1. Method Information
													</a>
												</li>
												<li class="nav-item m-tabs__item">
													<a class="nav-link m-tabs__link" data-toggle="tab" href="#m_form_confirm_2" role="tab">
														2. Method Condition
													</a>
												</li>
											</ul>
											<div class="tab-content m--margin-top-40">
												<div class="tab-pane active" id="m_form_confirm_1" role="tabpanel">
													<div class="m-form__section m-form__section--first">
														<div class="m-form__heading">
															<h4 class="m-form__heading-title">
																Method Details
															</h4>
														</div>
                            <div class="form-group m-form__group m-form__group--sm row">
                              <label class="col-xl-3 col-lg-3 col-form-label">
                                Merchant ID:
                              </label>
                              <div class="col-xl-9 col-lg-9">
                                <span class="m-form__control-static">
                                  M-0001
                                </span>
                              </div>
                            </div>
                            <div class="form-group m-form__group m-form__group--sm row">
                              <label class="col-xl-3 col-lg-3 col-form-label">
                                Payment Method:
                              </label>
                              <div class="col-xl-9 col-lg-9">
                                <span class="m-form__control-static">
                                  BCA Virtual Account (Midtrans)
                                </span>
                              </div>
                            </div>
                            <div class="form-group m-form__group m-form__group--sm row">
                              <label class="col-xl-3 col-lg-3 col-form-label">
                                Key:
                              </label>
                              <div class="col-xl-9 col-lg-9">
                                <span class="m-form__control-static">
                                  BCAVACLOSED
                                </span>
                              </div>
                            </div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Name:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	BCA Virtual Account CLOSED
																</span>
															</div>
														</div>
                            <div class="form-group m-form__group m-form__group--sm row">
                              <label class="col-xl-3 col-lg-3 col-form-label">
                                Descirption:
                              </label>
                              <div class="col-xl-9 col-lg-9">
                                <span class="m-form__control-static">
                                  Sepulsa BCA Virtual Account Close payment method
                                </span>
                              </div>
                            </div>
													</div>
													<div class="m-separator m-separator--dashed m-separator--lg"></div>
													<div class="m-form__section">
														<div class="m-form__heading">
															<h4 class="m-form__heading-title">
																Method Settings
															</h4>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Prefix:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	CANBCAVA-
																</span>
															</div>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Url:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	https://api.sandbox.midtrans.com/v2
																</span>
															</div>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Client Key:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	SB-Mid-client-sdubvuds938-j
																</span>
															</div>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Server Key:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	SB-Mid-server-biuc9834c3nc34
																</span>
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="m_form_confirm_2" role="tabpanel">
													<div class="m-form__section m-form__section--first">
														<div class="m-form__heading">
															<h4 class="m-form__heading-title">
																Method Condition
															</h4>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Minimum Amount:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	Rp 10.000
																</span>
															</div>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Status Notification:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	Pending, Settlement, Expired
																</span>
															</div>
														</div>
														<div class="form-group m-form__group m-form__group--sm row">
															<label class="col-xl-3 col-lg-3 col-form-label">
																Get Method without amount:
															</label>
															<div class="col-xl-9 col-lg-9">
																<span class="m-form__control-static">
																	Yes
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
              </div>
              <!--end: Form Body -->

              <!--begin: Form Actions -->
							<div class="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
								<div class="m-form__actions">
									<div class="row">
										<div class="col-lg-2"></div>
										<div class="col-lg-4 m--align-left">
											<a href="#" class="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev">
												<span>
													<i class="la la-arrow-left"></i>
													&nbsp;&nbsp;
													<span>
														Back
													</span>
												</span>
											</a>
										</div>
										<div class="col-lg-4 m--align-right">
											<a href="#" class="btn btn-primary m-btn m-btn--custom m-btn--icon" data-wizard-action="submit">
												<span>
													<i class="la la-check"></i>
													&nbsp;&nbsp;
													<span>
														Submit
													</span>
												</span>
											</a>
											<a href="#" class="btn btn-warning m-btn m-btn--custom m-btn--icon" data-wizard-action="next">
												<span>
													<span>
														Save & Continue
													</span>
													&nbsp;&nbsp;
													<i class="la la-arrow-right"></i>
												</span>
											</a>
										</div>
										<div class="col-lg-2"></div>
									</div>
								</div>
							</div>
							<!--end: Form Actions -->
            </form>
          </div>

				</div>
				<!--end: Form Wizard-->
			</div>
			<!--End::Main Portlet-->
    </div>


  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrm";
import MainDataTable from "@/components/MainDataTable";
import FormDynamic from "@/components/FormDynamic";
import { API_URL } from "@/common/config";

export default {
  name: "UserManagement",
  data() {
    return {
      username: null,
      fullName: null,
      showPage:3,
      allPage:6,
      currentPage:3,
      allData:33,
      field: [
        {
          name: 'Prefix',
          type: 'text'
        },
        {
          name: 'Url',
          type: 'text'
        },
        {
          name: 'Client Key',
          type: 'text'
        },
        {
          name: 'Server Key',
          type: 'text'
        }
      ]
    };
  },
  components: {
    Breadcrumb,
    MainDataTable,
    FormDynamic
  },
  methods: {
    changeComponent(e) {
      console.log(e.target.value);
      let fileds;
      switch (e.target.value) {
        case 'BCAM':
          fileds = [
            {
              name: 'Prefix',
              type: 'text'
            },
            {
              name: 'Url',
              type: 'text'
            },
            {
              name: 'Client Key',
              type: 'text'
            },
            {
              name: 'Server Key',
              type: 'text'
            }
          ];
          break;
        case 'BCAD':
          fileds = [
            {
              name: 'Password',
              type: 'password'
            },
            {
              name: 'Expire Duration',
              type: 'number'
            },
            {
              name: 'Client Key',
              type: 'text'
            },
            {
              name: 'Server Key',
              type: 'text'
            }
          ];
          break;
        default:
        fileds = [
          {
            name: 'Prefix',
            type: 'text'
          },
          {
            name: 'Url',
            type: 'text'
          },
          {
            name: 'Client Key',
            type: 'text'
          },
          {
            name: 'Server Key',
            type: 'text'
          }
        ];

      }
      this.field = fileds;
    }
  },
  computed: {
    breadCrumbs() {
      return [
        // {
        //   name: "Dashboard",
        //   action: "#",
        //   isActive: false
        // },
        {
          name: "Generals",
          action: "#",
          isActive: false
        },
        {
          name: "Method Management",
          action: "#",
          isActive: false
        }
        // {
        //   name: "User Management",
        //   isActive: true
        // }
      ];
    }
  },
  mounted() {
    var wizard = $('#m_wizard').mWizard();
  }
};
</script>
