'use strict';

module.exports = function (router) {
    
    router.post('/', (req, res) => {
        const { 
            numberOfAirports: airports, 
            numberOfClouds: clouds, 
            mapDimension: map
        } = req.body;

        const airportsPosition = [];
        const cloudsPosition = [];
        const mapField = [];

        [...Array(airports)].map(() => {
            let notAllowedToFollow = true;
            while(notAllowedToFollow) {
                notAllowedToFollow = false;
                let x = Math.floor(Math.random() * (map - 1)) + 1;
                let y = Math.floor(Math.random() * (map - 1)) + 1;

                airportsPosition.map(airport => {
                    if(airport[0] == x && airport[1] == y) {
                        notAllowedToFollow = true;
                    }
                })

                cloudsPosition.map(cloud => {
                    if(cloud[0] == x && cloud[1] == y) {
                        notAllowedToFollow = true;
                    }
                })

                if(notAllowedToFollow == false) {
                    airportsPosition.push([x,y]);
                }
            }
        });

        [...Array(clouds)].map(() => {
            let notAllowedToFollow = true;
            while(notAllowedToFollow) {
                notAllowedToFollow = false;
                let x = Math.floor(Math.random() * (map - 1)) + 1;
                let y = Math.floor(Math.random() * (map - 1)) + 1;

                airportsPosition.map(airport => {
                    if(airport[0] == x && airport[1] == y) {
                        notAllowedToFollow = true;
                    }
                })

                cloudsPosition.map(cloud => {
                    if(cloud[0] == x && cloud[1] == y) {
                        notAllowedToFollow = true;
                    }
                })

                if(notAllowedToFollow == false) {
                    cloudsPosition.push([x,y]);
                }
            }
        });

        for(let i = 0; i < map; i++) {
            const line = [];

            for(let j = 0; j < map; j++) {
                line.push('.');

                airportsPosition.map(airport => {
                    if(airport[0] === i && airport[1] === j) {
                        line.splice(j, 1,'A');
                    }
                });

                cloudsPosition.map(cloud => {
                    if(cloud[0] === i && cloud[1] === j) {
                        line.splice(j, 1, 'N');
                    }
                });
            }

            mapField.push(line);
        }
        
        let countDays = 0;
        let daysUntilFirstAirport = 0;
        let daysUntilAllAirports = 0;
        let newMap = [];
        
        mapField.map(row => {
            newMap.push(row.slice(0, map));
        });

        while(daysUntilAllAirports == 0) {
            
            // Get Airports
            const remainingAirports = newMap.map(row => (
                row.indexOf('A')
            )).filter(airport => (
                airport != -1
            ));

            // Get Clouds
            const clouds = newMap.map(row => (
                row.indexOf('N')
            ));

            clouds.forEach((cloud, index) => { // cloud -> valor, elemento em si | index -> linha em questão
                if(cloud != -1) {
                    // Top
                    if(newMap[index - 1] != undefined) {
                        newMap[index - 1][cloud] = 'N';
                    };

                    // Bottom
                    if(newMap[index + 1] != undefined) {
                        newMap[index + 1][cloud] = 'N';
                    };

                    // Right
                    if(newMap[index][cloud + 1] != undefined) {
                        newMap[index][cloud + 1] = 'N';
                    };

                    // Left
                    if(newMap[index][cloud - 1] != undefined) {
                        newMap[index][cloud - 1] = 'N';
                    }

                    if (daysUntilFirstAirport == 0 && remainingAirports.length < airports) {
                        daysUntilFirstAirport = countDays;
                    }

                    if (countDays == map) {
                        daysUntilAllAirports = countDays;
                    } else {
                        daysUntilAllAirports = remainingAirports.length < 1 && countDays;
                    }
                }
            });

            countDays++;
        }

        return res.json({
            daysUntilFirstAirport,
            daysUntilAllAirports,
            mapField
        });
    });
};
