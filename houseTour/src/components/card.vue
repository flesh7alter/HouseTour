<template>
    <div @click = 'house_detail'>
        <div class = 'card'>
            <div class = 'show_pic'></div>
            <div class = 'card_description'>
                <div class = 'city' style = 'padding-left:0px;'>{{item.city}}</div>
                <div class ='card_title'>{{item.title}}</div>
                <div class = 'author'>作者：{{item.author}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'card',
  props: ['item'],
  methods: {
    house_detail () {
      var url = '/house/' + this.item.id
      this.$router.push(url)
    }
  }
}
</script>
