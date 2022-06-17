function isValidWalk(walk) {
   let wx = 0;
   let wy = 0;
   let wt = walk.length;

    for(let i in walk) {

        switch(walk[i]) {
            case 'n':
                wx += 1;
                break;
            case 's':
                wx -= 1;
                break;
            case 'w':
                wy += 1;
                break;
            case 'e':
                wy -= 1;
                break;
        }

    }


    return wt === 10 && wy === 0 && wx === 0;

}

console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 's', 's', 'n', 's', 'n']));