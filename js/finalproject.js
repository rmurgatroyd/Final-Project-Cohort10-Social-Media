<script>
function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementsByClass("jumbotron").style.fontSize = listValue;
}
</script>
