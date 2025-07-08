const apikey = apikey
    
    document.getElementById('get-weather').addEventListener('click', function(){
        const city = document.getElementById('city-input').value.trim()
        
        if(city === ''){
            alert('Please enter city name');
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

        showloading();
        fetchweather(url);
        });

        document.getElementById('use-location').addEventListener('click', function(){
            if('geolocation' in navigator){
                
                navigator.geolocation.getCurrentPosition(function(position){
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
                    
                    showloading();
                    fetchweather(url);

                }, function(error){
                    hideloading()
                    alert('could not get your location.')
                })
            }else{
                alert('Geolocation not supported by your browser.')
            }
        })
        
        function fetchweather(url){
            fetch(url)
            .then(function(response){
                if(!response.ok){
                    throw new Error('city not found')
                }
                return response.json();
            })
            .then(function(data){
                hideloading()
                showweather(data)
            })
             .catch(function(error){
                hideloading();
                document.getElementById('weather-result').textContent = 'error.message'
            })

        }
            
        function showweather(data){
                const temp = data.main.temp;
                const weather = data.weather[0].main;
                const description = data.weather[0].description;
                const city = data.name;
                const country = data.sys.country;
                const humidity = data.main.humidity;
                const windspeed = data.wind.speed;
                
                const flagURL = `https://flagcdn.com/40x30/${country.toLowerCase()}.png`;
                const iconcode = data.weather[0].icon;
                const iconURL = `https://openweathermap.org/img/wn/${iconcode}@2x.png`
                // console.log(country);
                // console.log(flagURL);
                
            


            document.getElementById('weather-result').innerHTML= `
            <strong>${city.toUpperCase()}, ${country}</strong><br />
            <img src="${flagURL}" alt="${country} flag"/><br /><br />
            <img src="${iconURL}" alt="${description}"/><br />
            <strong>${weather}</strong>(${description})<br />
                🌡 Temp: ${temp}℃ <br />
                ⛅ Weather: ${weather}<br/>
                ༄ wind: ${windspeed} m/s;
    
           `;
        
        }
       
        function showloading(){
            document.getElementById('loading').style.display= 'block';
            
        }
        function hideloading(){
            document.getElementById('loading').style.display= 'none';

        }

        const uiloadinghide = document.getElementById('loading').style.display='none'