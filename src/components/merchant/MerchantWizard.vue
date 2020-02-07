<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Merchant Management
          </h3>
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
                Merchant Registration
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
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--end: Form Wizard Progress -->

            <!--begin: Form Wizard Nav -->
            <div class="m-wizard__nav">
              <div class="m-wizard__steps">
                <div
                  class="m-wizard__step m-wizard__step--current"
                  data-wizard-target="#m_wizard_form_step_1"
                >
                  <a href="#" class="m-wizard__step-number">
                    <span>
                      <i class="fa  flaticon-placeholder"></i>
                    </span>
                  </a>
                  <div class="m-wizard__step-info">
                    <div class="m-wizard__step-title">
                      1. Merchant Information
                    </div>
                    <div class="m-wizard__step-desc">
                      Basic information
                    </div>
                  </div>
                </div>
                <div
                  class="m-wizard__step"
                  data-wizard-target="#m_wizard_form_step_2"
                >
                  <a href="#" class="m-wizard__step-number">
                    <span>
                      <i class="fa  flaticon-layers"></i>
                    </span>
                  </a>
                  <div class="m-wizard__step-info">
                    <div class="m-wizard__step-title">
                      2. Account Setup
                    </div>
                    <div class="m-wizard__step-desc">
                      Account Information
                    </div>
                  </div>
                </div>
                <div
                  class="m-wizard__step"
                  data-wizard-target="#m_wizard_form_step_3"
                >
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
            <form
              class="m-form m-form--label-align-left- m-form--state-"
              id="m_form"
            >
              <!--begin: Form Body -->
              <div class="m-portlet__body">
                <div
                  class="m-wizard__form-step m-wizard__form-step--current"
                  id="m_wizard_form_step_1"
                >
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="m-form__section m-form__section--first">
                        <div class="m-form__heading">
                          <h3 class="m-form__heading-title">
                            Merchant Details
                          </h3>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Name:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="Nick Stone"
                            />
                            <span class="m-form__help">
                              Please enter your first and last names
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Official Name:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="Canopus Merchant M-0001"
                            />
                            <span class="m-form__help">
                              Please enter your official name
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Merchant ID:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="M-0001"
                            />
                            <span class="m-form__help">
                              Please enter merchant ID
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Email:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="email"
                              name="email"
                              class="form-control m-input"
                              placeholder=""
                              value="nick.stone@gmail.com"
                            />
                            <span class="m-form__help">
                              We'll never share your email with anyone else
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Phone
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="la la-phone"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                name="phone"
                                class="form-control m-input"
                                placeholder=""
                                value="1-541-754-3010"
                              />
                            </div>
                            <span class="m-form__help">
                              Enter your valid phone in US phone format. E.g:
                              1-541-754-3010
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * PIC:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="Nick Stone"
                            />
                            <span class="m-form__help">
                              Please enter PIC name
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * Address Line:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="address1"
                              class="form-control m-input"
                              placeholder=""
                              value="Headquarters 1120 N Street Sacramento 916-654-5266"
                            />
                            <span class="m-form__help">
                              Street address, P.O. box, company name, c/o
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * NPWP ID:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="1234567890"
                            />
                            <span class="m-form__help">
                              Please enter npwp ID
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">
                            * NPWP Name:
                          </label>
                          <div class="col-xl-9 col-lg-9">
                            <input
                              type="text"
                              name="name"
                              class="form-control m-input"
                              placeholder=""
                              value="Nick Stone"
                            />
                            <span class="m-form__help">
                              Please enter npwp name
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-wizard__form-step" id="m_wizard_form_step_2">
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <div class="m-form__section m-form__section--first">
                        <div class="m-form__heading">
                          <h3 class="m-form__heading-title">
                            Account Details
                          </h3>
                        </div>
                        <div class="form-group m-form__group row">
                          <div class="col-lg-12">
                            <label class="form-control-label">
                              * URL:
                            </label>
                            <input
                              type="url"
                              name="account_url"
                              class="form-control m-input"
                              placeholder=""
                              value="http://sinortech.vertoffice.com"
                            />
                            <span class="m-form__help">
                              Please enter your preferred URL to your dashboard
                            </span>
                          </div>
                        </div>
                        <div class="form-group m-form__group row">
                          <div class="col-lg-6 m-form__group-sub">
                            <label class="form-control-label">
                              * Username:
                            </label>
                            <input
                              type="text"
                              name="account_username"
                              class="form-control m-input"
                              placeholder=""
                              value="nick.stone"
                            />
                            <span class="m-form__help">
                              Your username to login to your dashboard
                            </span>
                          </div>
                          <div class="col-lg-6 m-form__group-sub">
                            <label class="form-control-label">
                              * Password:
                            </label>
                            <input
                              type="password"
                              name="account_password"
                              class="form-control m-input"
                              placeholder=""
                              value="qwerty"
                            />
                            <span class="m-form__help">
                              Please use letters and at least one number and
                              symbol
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Form Body -->

              <!--begin: Form Actions -->
              <div
                class="m-portlet__foot m-portlet__foot--fit m--margin-top-40"
              >
                <div class="m-form__actions">
                  <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-4 m--align-left">
                      <a
                        href="#"
                        class="btn btn-secondary m-btn m-btn--custom m-btn--icon"
                        data-wizard-action="prev"
                      >
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
                      <a
                        href="#"
                        class="btn btn-primary m-btn m-btn--custom m-btn--icon"
                        data-wizard-action="submit"
                      >
                        <span>
                          <i class="la la-check"></i>
                          &nbsp;&nbsp;
                          <span>
                            Submit
                          </span>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="btn btn-warning m-btn m-btn--custom m-btn--icon"
                        data-wizard-action="next"
                      >
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

export default {
  name: "merchantFormWizard",
  data() {
    return {
      username: null,
      fullName: null,
      showPage: 3,
      allPage: 6,
      currentPage: 3,
      allData: 33
    };
  },
  components: {
    Breadcrumb,
    MainDataTable
  },
  methods: {},
  computed: {
    breadCrumbs() {
      return [
        {
          name: "Generals",
          action: "#",
          isActive: false
        },
        {
          name: "Merchant Management",
          action: "#",
          isActive: false
        }
      ];
    }
  },
  mounted() {
    $("#m_wizard").mWizard();
  }
};
</script>
