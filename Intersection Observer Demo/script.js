
 const sectionOne = document.querySelector("#third")

 const options = {
    threshold: 0.25
 }

 const observer = new IntersectionObserver(function(entries,observer)
 {
    entries.forEach(entry => {
        let intersect = entry.isIntersecting
        if(intersect)
            {
                entry.target.setAttribute("style","background-color: black;")
            }
    })
 },options)
 observer.observe(sectionOne)
