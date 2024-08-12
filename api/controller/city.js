import axios from "axios"
import City from "../modules/city.js"

export const getAll = (req, res) => {
    City.find()
        .then(cities => {
            res.status(200).send({ cities })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}

export const create = (req, res) => {

    const { name } = req.body

    const city = new City({
        name,
        appartments: []
    })

    city.save()
        .then(c => {
            res.status(200).send({ message: `create city ${c._id} succeed!` })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })

}

export const getWeather = (req, res) => {

    const _id = req.params.id
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const city = ''
    City.findById(_id)
    .then(c => {
        if(!c)
            return res.status(404).send({ error: `city not found!` })
        city = c.name
    })
    .catch(error => {
        return res.status(500).send({ error: error.message })
    })

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(`עיר: ${data.name}`);
            console.log(`טמפרטורה: ${data.main.temp}°C`);
            console.log(`תיאור: ${data.weather[0].description}`);
            console.log(`לחות: ${data.main.humidity}%`);
            console.log(`מהירות רוח: ${data.wind.speed} m/s`);
            return res.status(200).send({ 
                'name': data.name,
                'temp': data.main.temp,
                'description': data.weather[0].description,
                'humidity': data.main.humidity,
                'wind': data.wind.speed
             })
        })
        .catch(error => {
            return res.status(500).send({ error: error.message })
        });
}