<script>
  import Star from "./Star.svelte";
  export let id;
  export let rating;
  // rating from rat/100 to rat/5
  rating = rating / 20;
  // number of full, 'half' and empty stars
  const full = Math.floor(rating);
  const half = Math.round((rating - full) * 100) / 100;
  const empty = Math.floor(5 - rating);
  // partial arrays
  const fullArr = Array(full).fill(1);
  const halfArr = [half];
  const emptyArr = Array(empty).fill(0);
  // array of star-to-be numbers
  const stars = fullArr.concat(halfArr).concat(emptyArr);
</script>

<style>
  div {
    display: flex;
    /* justify-content: center; */
    /* align-content: center; */
    /* grid-template-columns: repeat(6, 1fr);
    align-items: center;
    width: 75%; */
    margin-bottom: 14px;
  }
  span {
    color: #7f7f7f;
    line-height: 1;
    align-self: center;
  }
</style>

<div>
  {#each stars as star}
    <Star {id} full={star} />
  {/each}
  <span>{rating}</span>
</div>
