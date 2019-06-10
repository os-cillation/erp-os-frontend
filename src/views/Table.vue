<template>
    <div id="tableApp">
        <vk-table v-bind:data="vogel" :selected-rows.sync="selection"
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
                                  v-model="projectitem"
                                  placeholder="Projekt auswählen"
                                  style="min-height: 0px !important;">
                    </model-select>
                </div>
            </vk-table-column>
            <vk-table-column title="Task" cell="tasks">
                <div slot-scope="cell">
                    <model-select class=".uk-width-1-2" :options="cell.cell"
                                  v-model="taskitem"
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
        <vk-button class="uk-button-primary" v-on:click="handleAdd">Hinzufügen</vk-button>
        <vk-button v-on:click="handleDelete">Löschen</vk-button>
    </div>
</template>

<script>
import LabelEdit from 'label-edit';
import VueTimepicker from 'vue2-timepicker';
import DatePicker from 'vuejs-datepicker';
import { ModelSelect } from 'vue-search-select';
import VkButton from 'vuikit/src/library/button/components/button';
import axios from 'axios';

export default {
  name: 'tableApp',
  components: {
    VkButton,
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
      projectitem: {
        value: '',
        text: '',
      },
      taskitem: {
        value: '',
        text: '',
      },
      sampleRow: {
        date: new Date(),
        city: '',
        state: '',
        amount: { hh: '00', mm: '00' },
        projects: [{ text: '', value: '' }],
        tasks: [{ text: '', value: '' }],
      },
      options: [
        { text: 'tw', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
      vogel: [
      ],
      selected: [],
      search: '',
    };
  },
  watch: {
    projectitem(val) {
      this.getTasks(val.value);
    },
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
    handleAdd() {
      this.vogel.push(this.sampleRow);
    },
    getTasks(project) {
      if (project) {
        axios.get(`${process.env.VUE_APP_API_URL}/api/task/${project}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        })
          .then((response) => {
            const result = response.data.map(item => ({
              text: item.name,
              value: item.id,
            }));
            this.sampleRow.tasks = result;
            console.log(result);
          });
      }
    },
    handleDelete() {

    },
  },
  beforeMount() {
    // Hole alle Projekte für den User
    axios.get(`${process.env.VUE_APP_API_URL}/api/project`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        const result = response.data.map(item => ({
          text: item.name,
          value: item.id,
        }));
        this.sampleRow.projects = result;
      });
  },
};
</script>
