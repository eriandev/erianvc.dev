import { readable } from 'svelte/store'

export const projects = readable(
    [
        {
            title: 'Weather App',
            description: 'Wep app que muestra el clima en tu región y un pronóstico de los 5 próximos días',
            technologies: [
                'Svelte', 
                'Javascript', 
                'HTML5', 
                'CSS3', 
                'TailwindCSS'
            ],
            demo: 'https://erianvc-weather-app.netlify.com'
        },
        {
            title: 'COVID Perú',
            description: 'Web app que muestra el número de infectados, recuperados y fallecidos a causa del COVID-19 en Perú',
            technologies: [
                'Javascript', 
                'HTML5', 
                'CSS3', 
                'TailwindCSS'
            ],
            demo: 'https://erianvc.github.io/COVID-Peru'
        },
        {
            title: 'Fylo Landing Page',
            description: 'Reto #1 realizado de frontedmentor.io',
            technologies: [
                'HTML5', 
                'CSS3', 
                'TailwindCSS'
            ],
            demo: 'https://erianvc.github.io/fylo-landing-page/'
        },
        {
            title: 'Huddle Landing Page',
            description: 'Reto #2 realizado de frontedmentor.io',
            technologies: [
                'HTML5', 
                'CSS3', 
                'TailwindCSS'
            ],
            demo: 'https://erianvc.github.io/huddle-landing-page/'
        }
    ], function start(set){})
