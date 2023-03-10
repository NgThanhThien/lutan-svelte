<script>
 import Footer from "../../components/Footer.svelte";
import Header from "../../components/Header.svelte";

</script>
<header>
  <Header></Header>
</header>
<main>
  <slot></slot>
</main>
<footer>
  <Footer/>
</footer>