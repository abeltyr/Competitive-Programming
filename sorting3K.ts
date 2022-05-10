function kClosest(points: number[][], k: number): number[][] {
    let euclidean = [];
    for (let i = 0; i < points.length; i++) {
        euclidean = [...euclidean,
            {
                data: points[i],
                result: Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)),
            },
        ];
    }
    let result = [];

    for (let i = 0; i < euclidean.length; i++) {
        for (let j = 0; j < euclidean.length; j++) {
            if (euclidean[j].result > euclidean[i].result) {
                let newData = euclidean[i];
                euclidean[i] = euclidean[j]
                euclidean[j] = newData;
            }

        }
    }

    for (let i = 0; i < k; i++) {
        result = [...result, euclidean[i].data]
    }
    return result;
};