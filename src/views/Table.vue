<template>
    <div id="tableApp">
        <vk-table :data="vogel" :selected-rows.sync="selection"
                  :sorted-by.sync="sortedBy" responsive>
            <vk-table-column-select></vk-table-column-select>
            <vk-table-column title="Datum" cell="date" shrinked>
                <div slot-scope="cell">
                    <date-picker format="dd.MM.yyyy" valueType="format"
                                 :value="cell.cell" lang="de">
                    </date-picker>
                </div>
            </vk-table-column>
            <vk-table-column title="Projekt" cell="projects">
                <div slot-scope="cell">
                    <model-select class=".uk-width-1-2" :options="cell.cell"
                                  v-model="item"
                                  placeholder="Projekt auswählen"
                                  style="min-height: 0px !important;">
                    </model-select>
                </div>
            </vk-table-column>
            <vk-table-column title="Task" cell="tasks">
                <div slot-scope="cell">
                    <model-select class=".uk-width-1-2" :options="cell.cell"
                                  v-model="item"
                                  placeholder="Task auswählen"
                                  style="min-height: 0px !important;">
                    </model-select>
                </div>
            </vk-table-column>
            <vk-table-column title="Buchungstext" cell="state" expanded>
                <div slot-scope="cell">
                    <label-edit style="text-align:left;" :text="cell.cell" id="labeledit1"
                                v-on:text-updated="textUpdated">&nbsp;
                    </label-edit>
                </div>
            </vk-table-column>
            <vk-table-column title="Aufwand" cell="amount" shrinked>
                <div slot-scope="cell">
                    <vue-timepicker v-model="cell.cell" :format="format" :minute-interval="15">
                    </vue-timepicker>
                </div>
            </vk-table-column>
        </vk-table>
    </div>
</template>

<script>
import LabelEdit from 'label-edit';
import VueTimepicker from 'vue2-timepicker';
import DatePicker from 'vuejs-datepicker';
import { ModelSelect } from 'vue-search-select';

export default {
  name: 'tableApp',
  components: {
    LabelEdit,
    VueTimepicker,
    DatePicker,
    ModelSelect,
  },
  on: {
  },
  data() {
    return {
      sortedBy: { name: 'asc' },
      selection: [],
      format: 'hh:mm',
      item: {
        value: '',
        text: '',
      },
      options: [
        { text: 'tw', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
      vogel: [
        {
          date: new Date(2019, 6, 6),
          city: 'San Francisco',
          state: 'CAA',
          amount: { hh: '01', mm: '15' },
          projects: [{ text: 'Projekt 1', value: '1' }],
          tasks: [{ text: 'Task 1', value: '1' }],
        },
        {
          date: new Date(2019, 6, 9),
          city: 'New York',
          state: 'NY',
          amount: { hh: '00', mm: '30' },
          projects: [{ text: 'Projekt 2', value: '2' }],
          tasks: [{ text: 'Task 1', value: '1' }],
        },
        {
          date: new Date(2019, 6, 4),
          city: 'Los Angeles',
          state: 'CA',
          amount: { hh: '02', mm: '00' },
          projects: [{ text: 'Projekt 3', value: '3' }],
          tasks: [{ text: 'Task 1', value: '1' }],
        },
      ],
      selected: [],
      search: '',
      isMobile: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          value: 'name',
        },
        {
          text: 'Calories',
          value: 'calories',
        },
        {
          text: 'Fat (g)',
          value: 'fat',
        },
        {
          text: 'Carbs (g)',
          value: 'carbs',
        },
        {
          text: 'Protein (g)',
          value: 'protein',
        },
        {
          text: 'Iron (%)',
          value: 'iron',
        },
      ],
      desserts: [{
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      }],
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 769) this.isMobile = true;
      else this.isMobile = false;
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      console.log(column);
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    textUpdated(text) {
      this.text = text;
    },
    reset() {
      this.item = {};
    },
    selectFromParentComponent1() {
      // select option from parent component
      this.item = this.options[0];
    },
  },
};
</script>
