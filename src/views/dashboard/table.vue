<template>
  <mu-paper :z-depth="1">
    <mu-data-table selectable select-all :selects.sync="selects" checkbox :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
    <mu-flex align-items="center" style="padding: 8px;" wrap="wrap">
      selects: <mu-chip delete v-for="selectIndex in selects" @delete="removeSelect(selectIndex)" style="margin: 8px;" color="green" :key="selectIndex">{{list[selectIndex].name}}</mu-chip>
    </mu-flex>
  </mu-paper>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      selects: [],
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    removeSelect (selectIndex) {
      const index = this.selects.indexOf(selectIndex);
      this.selects.splice(index, 1);
    }
  }
};
</script>

<style>

</style>
