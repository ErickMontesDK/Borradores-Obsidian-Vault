---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Formato de una prueba
<hr> 

> [!abstract]
> PAra escribir un test unitario, se sigue el siguiente patrón
> ```js
> describe("Descripción breve de la prueba", () => {
> 	test('Descripción de este test en particular', () => {
> 
> 		const result = 1 + 2  //elementos necesarios para la prueba
> 
> 		expect(result).toBe(3);  //Comparación a cumplir entre lo que se obtuvo y lo que se espera obtener
> 	});
> })
> ```
> 
> > [!example]
> > 
> > ```js
> > const mission=require('../app/missionCommander')
> > 
> > describe("Esto es una suite de pruebas", () => {
> >     test('Caso de prueba 1', () => {
> >     
> >       const result = 1 + 2 
> >       
> >       expect(result).toBe(3);
> >     });
> >     test('Create a mission commander object', () => {
> >     
> >         const myMissionCommander = new mission("Erick");
> >         
> >         expect(myMissionCommander.name).toBe("Erick");
> >       });
> >   })
> > ```
> > 
> > 
> 

<hr>
<b>Tags:</b> #javascript 