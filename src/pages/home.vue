<template>
  <el-row>
    <el-col :span="8">
      <el-table :data="heroes.slice(0, 247)" style="width: 100%">
        <el-table-column prop="id" label="Hero Id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="8">
      <el-table :data="heroes.slice(248, 490)" style="width: 100%">
        <el-table-column prop="id" label="Hero Id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="8">
      <el-table :data="heroes.slice(491, 730)" style="width: 100%">
        <el-table-column prop="id" label="Hero Id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { heroList } from "../data/hero-list";
export default {
  name: "Home",
  data() {
    return {
      heroes: heroList,
    };
  },
};
</script>
