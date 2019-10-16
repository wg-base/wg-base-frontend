<template>
  <div>
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu :active-name="0" theme="dark" width="auto" :class="menuitemClasses">
          <div v-for="(item,index) in menuData[1].children" :key="index" :index="index">
            <MenuItem name="1-1" v-if="item.children.length == 0" @click.native="() => $router.push({ path: item.path, query: $route.query })">
              <Icon :type="item.meta.icon"></Icon>
              <span>{{item.meta.title}}</span>
            </MenuItem>
            <Submenu :name="index" v-if="item.children.length>0">
              <template slot="title">
                <Icon :type="item.meta.icon"></Icon>
                {{item.meta.title}}
              </template>
              <MenuItem v-for="(childItem,childItemIndex) in item.children"
                        :key="childItemIndex"
                        :index="childItemIndex"
                        :name='index+"-"+childItemIndex'
                        @click.native="() => $router.push({ path: childItem.path, query: $route.query })">
                {{childItem.meta.title}}
              </MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '1104px'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>

  </div>
</template>

<script>
export default {
    name: "main-page",

    data () {
        return {
            isCollapsed: false,
            menuData:this.$router.options.routes
        }
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
        collapsedSider () {
            this.$refs.side1.toggleCollapse();
        },
    }
}
</script>

<style scoped>
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
