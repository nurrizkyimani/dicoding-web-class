  
    let dropdown = () => {
      document.getElementById("linkdrop").classList.toggle("show");
    }
  
    window.onclick = (event) => {
      if (!event.target.matches('.dropbtn')) {
        let alldropdown = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < alldropdown.length; i++) {
          let open = alldropdown[i];
          if (open.classList.contains('show')) {
            open.classList.remove('show');
          }
        }
      }
    }