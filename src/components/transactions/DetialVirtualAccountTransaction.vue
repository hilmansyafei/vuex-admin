<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Virtual Account Transactions
          </h3>
          <Breadcrumb :breadCrumbs="breadCrumbs" />
        </div>
        <div>
          <div
            class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
            data-dropdown-toggle="hover"
            aria-expanded="true"
          >
            <a
              href="#"
              class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle"
            >
              <i class="la la-plus m--hide"></i>
              <i class="la la-ellipsis-h"></i>
            </a>
            <div class="m-dropdown__wrapper">
              <span
                class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"
              ></span>
              <div class="m-dropdown__inner">
                <div class="m-dropdown__body">
                  <div class="m-dropdown__content">
                    <ul class="m-nav">
                      <li class="m-nav__section m-nav__section--first m--hide">
                        <span class="m-nav__section-text"> Quick Actions </span>
                      </li>
                      <li class="m-nav__item">
                        <router-link
                          :to="
                            '/transactions/virtualAccountTransaction/123456789/notification'
                          "
                          class="m-nav__link"
                        >
                          <i class="m-nav__link-icon flaticon-share"></i>
                          <span class="m-nav__link-text">
                            Detail Notification
                          </span>
                        </router-link>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-chat-1"></i>
                          <span class="m-nav__link-text">
                            Resend Notification
                          </span>
                        </a>
                      </li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <i class="m-nav__link-icon flaticon-info"></i>
                          <span class="m-nav__link-text">
                            Update to Expired
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-content">
      <div class="row">
        <div class="col-xl-6">
          <!-- begin:: Widgets/Finance Summary -->
          <div class="m-portlet m-portlet--full-height ">
            <div class="m-portlet__head">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                  <h3 class="m-portlet__head-text">Information</h3>
                </div>
              </div>
            </div>
            <div class="m-portlet__body">
              <div class="m-widget12">
                <div class="m-widget12__item">
                  <span class="m-widget12__text1">
                    Bank <br />
                    <span> BCA </span>
                  </span>
                  <span class="m-widget12__text2">
                    Virtual Account <br />
                    <span> 07761925319 </span>
                  </span>
                </div>
                <div class="m-widget12__item">
                  <span class="m-widget12__text1">
                    Amount <br />
                    <span> Rp. 200,000 </span>
                  </span>
                  <div class="m-widget12__text2">
                    <div class="m-widget12__desc">Transaction Status</div>
                    <span>
                      <span class="m-badge m-badge--success m-badge--wide"
                        >Settlement</span
                      >
                    </span>
                  </div>
                </div>
                <div class="m-widget12__item">
                  <span class="m-widget12__text1">
                    Order ID <br />
                    <span> PRONCLO-1579578215141 </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end:: Widgets/Finance Summary -->
        </div>
        <div class="col-xl-6">
          <!-- begin:: Widgets/Company Summary -->
          <div class="m-portlet m-portlet--full-height ">
            <div class="m-portlet__head">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                  <h3 class="m-portlet__head-text">Order Details</h3>
                </div>
              </div>
            </div>
            <div class="m-portlet__body">
              <div class="m-widget13">
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right">
                    Order ID:
                  </span>
                  <span class="m-widget13__text m-widget13__text-bolder">
                    PRONCLO-1579578215141
                  </span>
                </div>
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right"> Amount: </span>
                  <span class="m-widget13__text m-widget13__text-bolder">
                    Rp. 200,000
                  </span>
                </div>
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right"> Name: </span>
                  <span class="m-widget13__text">
                    PAYMENT BCA Virtual Account - #sepulsa_39347394
                  </span>
                </div>
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right">
                    Transaction ID:
                  </span>
                  <span class="m-widget13__text m-widget13__text-bolder">
                    f8f9982d-3779-44c4-ba96-a73f9da8fcd1
                  </span>
                </div>
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right"> Time: </span>
                  <span class="m-widget13__text"> Mon, 20 Jan 2020 17:09 </span>
                </div>
                <div class="m-widget13__item">
                  <span class="m-widget13__desc m--align-right"> status: </span>
                  <span class="m-widget13__text"> Settlement </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end:: Widgets/Company Summary -->
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__head">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                  <h3 class="m-portlet__head-text">Transaction History</h3>
                </div>
              </div>
            </div>
            <div class="m-portlet__body">
              <div class="m-section__content">
                <table class="table table-striped m-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mon, 20 Jan 2020 17:09</td>
                      <td>Pending</td>
                      <td>Rp. 200,000</td>
                      <td>System</td>
                    </tr>
                    <tr>
                      <td>Mon, 20 Jan 2020 17:09</td>
                      <td>Settlement</td>
                      <td>Rp. 200,000</td>
                      <td>System</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!--
          <div class="col-sm-6">
            <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__head">
              <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                  <h3 class="m-portlet__head-text">
                    Transaction Notification
                  </h3>
                </div>
              </div>
            </div>
            <div class="m-portlet__body">
              <div class="m-section__content">
                <table class="table table-striped m-table">
          	<thead>
          		<tr>
          			<th>
          				Url
          			</th>
          			<th>
          				Transaction Status
          			</th>
          			<th>
          				Notification Status
          			</th>
          		</tr>
          	</thead>
          	<tbody>
          		<tr>
          			<td class="ellipsis" width="100">url</td>
                      <td>Pending</td>
                      <td>SUCCESS</td>
          		</tr>
                    <tr>
                      <td class="ellipsis" width="100">url</td>
                      <td>Settlement</td>
                      <td>SUCCESS</td>
          		</tr>
          	</tbody>
          </table>
              </div>
            </div>
          </div>
          </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrm";

export default {
  name: "UserManagement",
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
    Breadcrumb
  },
  methods: {},
  computed: {
    breadCrumbs() {
      return [
        {
          name: "Transactions",
          action: "#",
          isActive: false
        },
        {
          name: "Virtual Account",
          action: "#",
          isActive: false
        }
      ];
    }
  },
  mounted() {}
};
</script>
