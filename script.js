<script>
  const profileImage = document.getElementById("profileImage");
  const profilePreview = document.getElementById("profilePreview");
  const avatarText = document.getElementById("avatarText");

  profileImage.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        profilePreview.src = e.target.result;
        profilePreview.style.display = "block";
        avatarText.style.display = "none";
      };

      reader.readAsDataURL(file);
    }
  });
</script>
