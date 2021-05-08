<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" >
            ADMINISTRACIÓN DE TECNOLOG&Iacute;AS DE INFORMACI&Oacute;N
          </a>
        </li>

      </ul>
      <div class="copyright">
        © {{year}} made with <i class="tim-icons icon-heart-2"></i>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
