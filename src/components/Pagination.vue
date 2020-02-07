<template>
  <div>
    <nav aria-label="Page navigation example" class="pull-right">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="minPage">Previous</a>
        </li>
        <li class="page-item" v-if="currentPageP > 2 && allPageP > 3">
          <a class="page-link" href="#" @click="setCurrentPageP(1)">1</a>
        </li>
        <li class="page-item" v-if="currentPageP > 3">
          <a class="page-link" href="#">...</a>
        </li>
        <li
          v-for="(page, index) in showPage"
          :key="index"
          class="page-item"
          v-bind:class="{ active: index + currentPageP - 1 == currentPageP }"
        >
          <a
            class="page-link"
            v-if="currentPageP > 1 && currentPageP != allPageP && allDataP > 10"
            href="#"
            @click="setCurrentPageP(index + currentPageP - 1)"
            >{{ index + currentPageP - 1 }}</a
          >
        </li>
        <li class="page-item active" v-if="allDataP < 10">
          <a class="page-link" href="#">1</a>
        </li>
        <li
          v-for="(page, index) in showPage"
          :key="index + 1230"
          class="page-item"
          v-bind:class="{ active: index + currentPageP == currentPageP }"
        >
          <a
            class="page-link"
            v-if="currentPageP == 1 && currentPageP != allPageP"
            href="#"
            @click="setCurrentPageP(index + 1)"
            >{{ index + 1 }}</a
          >
        </li>
        <li
          v-for="(page, index) in showPage"
          :key="index + 111"
          class="page-item"
          v-bind:class="{ active: currentPageP - index == allPageP - minus }"
        >
          <a
            class="page-link"
            v-if="
              currentPageP == allPageP &&
                allDataP > 10 &&
                allPageP - minus + index <= currentPageP
            "
            href="#"
            @click="setCurrentPageP(allPageP - minus + index)"
            >{{ allPageP - minus + index }}</a
          >
        </li>
        <li class="page-item" v-if="currentPageP < allPageP - 2">
          <a class="page-link" href="#">...</a>
        </li>
        <li
          class="page-item"
          v-if="currentPageP + 1 < allPageP && allPageP > 4"
          @click="setCurrentPageP(allPageP)"
        >
          <a class="page-link" href="#">{{ allPageP }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="addPage">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      showPageP: 0,
      allPageP: 0,
      currentPageP: 0,
      allDataP: 0,
      start: 1,
      filtered: 0,
      minus: 2
    };
  },
  props: {
    showPage: { type: Number, required: false },
    allPage: { type: Number, required: false },
    currentPage: { type: Number, required: false },
    allData: { type: Number, required: false }
  },
  methods: {
    addPage() {
      if (this.currentPageP < this.allPageP) {
        this.currentPageP++;
      }
    },
    minPage() {
      if (this.currentPageP > 1) {
        this.currentPageP--;
      }
    },
    setCurrentPageP(page) {
      this.currentPageP = page;
    }
  },
  watch: {
    currentPageP(newVal) {
      if (newVal > 1) {
        this.start = newVal * 10;
        this.filtered = this.start + 10;
      } else {
        this.start = 1;
        this.filtered = 10;
      }
    }
  },
  mounted() {
    this.showPageP = this.showPage;
    this.allPageP = this.allPage;
    this.currentPageP = this.currentPage;
    this.allDataP = this.allData;
  }
};
</script>
