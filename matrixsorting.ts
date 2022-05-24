function merge(intervals: number[][]): number[][] {
    let noIntervals = [...intervals];

    for (let i = 0; i < noIntervals.length; i++) {
        for (let j = i + 1; j < noIntervals.length; j++) {
            if (noIntervals[i][0] > noIntervals[j][0]) {
                let newData = noIntervals[i];
                noIntervals[i] = noIntervals[j];
                noIntervals[j] = newData;
            }
        }
    }
    for (let i = 0; i < noIntervals.length; i++) {
        let j = i + 1;
        while (j < noIntervals.length) {
            if (noIntervals[i][1] >= noIntervals[j][0]) {
                if (noIntervals[i][0] > noIntervals[j][0]) {
                    noIntervals[i][0] = noIntervals[j][0]
                }
                if (noIntervals[i][1] < noIntervals[j][1]) {
                    noIntervals[i][1] = noIntervals[j][1]
                }
                noIntervals.splice(j, 1);
            } else {
                j++
            }
        }
    }
    return noIntervals;
};