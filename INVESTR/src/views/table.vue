<script>
import { mapActions, mapState } from "pinia";
import { useInvestrStore } from "../stores";

export default {
  name: "table",
  methods: {
    ...mapActions(useInvestrStore, ["logout", "fetchInvestment"]),
  },
  computed: {
    ...mapState(useInvestrStore, ["email", "investments"]),
  },
  created() {
    this.fetchInvestment();
  },
};
</script>

<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-secondary navbar-dark">
        <a href="index.html" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary">INVESTR</h3>
        </a>
        <div class="d-flex align-items-center ms-4 mb-4">
          <div class="position-relative"></div>
          <div class="ms-3">
            <h6 class="mb-0">{{ ElementInternals }}</h6>
            <span>Investor</span>
          </div>
        </div>
        <div class="navbar-nav w-100">
          <a @click.prevent="this.$router.push('/')" class="nav-item nav-link"
            ><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a
          >
          <a
            @click.prevent="this.$router.push('/tables')"
            class="nav-item nav-link active"
            ><i class="fa fa-table me-2"></i>Your Investment</a
          >
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->

    <!-- Content Start -->
    <div class="content">
      <!-- Navbar Start -->
      <nav
        class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0"
      >
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0">INVESTR</h2>
        </a>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <span class="d-none d-lg-inline-flex">{{ email }}</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0"
            >
              <a href="#" class="dropdown-item" @click.prevent="logout"
                >Log Out</a
              >
            </div>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->

      <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-12">
            <div class="bg-secondary rounded h-100 p-4">
              <h6 class="mb-4">Your Investments</h6>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price Was</th>
                    <th scope="col">Price Now</th>
                    <th scope="col">Volume</th>
                    <th scope="col">Bought At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in investments">
                    <th scope="row">{{ data.Stock.name }}</th>
                    <td>{{ data.price }}</td>
                    <td></td>
                    <td>{{ data.volume }}</td>
                    <td>{{ data.createdAt.split("T")[0] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Table End -->

      <!-- Footer Start -->
      <!-- <div class="container-fluid pt-4 px-4">
        <div class="bg-secondary rounded-top p-4">
          <div class="row">
            <div class="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-12 col-sm-6 text-center text-sm-end"> -->
      <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
      <!-- Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By:
              <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Footer End -->
    </div>
    <!-- Content End -->
  </div>
</template>
