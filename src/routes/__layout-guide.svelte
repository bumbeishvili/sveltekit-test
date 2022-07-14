<script>
 import Title from "$lib/title.svelte";
 import "../styles/global.css";
</script>

<header>
 <Title title="Guide Layout" />
</header>
<main>
 <!-- Page Content-->
 <slot />
</main>


<style>
 header {
  display: flex;
  justify-content: center;
 }
 main {
  max-width: 960px;
  margin: 20px auto;
 }
</style>
