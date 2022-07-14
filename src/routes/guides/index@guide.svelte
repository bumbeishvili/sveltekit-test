<script context="module">
 export async function load({fetch}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const guides = await res.json();

  if (res.ok) {
   return {
    props: {
     testTitle: "Loaded Lists",
     guides,
    },
   };
  }
  return {
   status: res.status,
   error: new Error("Could not fetch the guides"),
  };
 }
</script>

<script>
 export let testTitle = "Welcome";
 export let guides;
</script>

<div class="guides">
 <h1>{testTitle}</h1>
 <ul>
  {#each guides as guide}
   <li>
    <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
   </li>
  {/each}
  <li>
   <a href="/">Guide 1</a>
   <a href="/">Guide 2</a>
  </li>
 </ul>
</div>

<style>
 .guides {
  margin-top: 20px;
 }
 ul {
  list-style-type: none;
  padding: 0;
 }
 a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px;
  border: 1px dotted rgba(255, 255, 255, 0.2);
 }
</style>
