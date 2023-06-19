function findNeedle(haystack) {
    return `found the needly at position ${haystack.indexOf("needle")}`
 }
 console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))