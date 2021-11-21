export const home = {
  header: {
    preTitle: {
      open: `¡Edición 2022 en marcha 🚀!`,
      closed: "Preparando próxima edición... 👨‍🍳👩‍🍳",
    },
    title: (
      <h1>
        Aprende a{" "}
        <span className="no-wrap">
          <span className="color-emphasys"> {`{`} </span> programar{" "}
          <span className="color-emphasys"> {"}"} </span>
        </span>{" "}
        desde cero
      </h1>
    ),
    description: {
      open: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
      closed: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
    },
    cta: { open: `¡Quiero apuntarme!`, close: `¡Quiero informarme!` },
  },
  aboutUsSection: {
    title: "We are TeachTech!",
    description: (
      <p>
        Somos un grupo de{" "}
        <span className="bold">apasionados de la programación</span> que nos
        hemos unido para ayudar a gente como tú a{" "}
        <span className="bold">perderle el miedo a programar</span>. Queremos
        transmitirte la misma pasión que sentimos nosotros por nuestro trabajo y
        que veas que es posible conseguir eso que te ronda hace tiempo.
      </p>
    ),
    cta: "Conoce a los profes y mentores",
    link: "O descubre cómo surgió Teach[t3ch]",
  },
}

export const testimonials = {
  title: "Lo que dicen de nosotros",
  description:
    "TeachT3ch es un curso de verano, pero también una experiencia de voluntariado para profes y mentores. Esto es lo que dicen de su experiencia",
  content: {
    students: [
      {
        testimonial:
          "Me ha ayudado a sentirme capaz de seguir ese camino. Al terminar me sentía hiper-motivada para seguir programando y estudiando.",
        author: "Bea",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2020",
      },
      {
        testimonial:
          "TeachTech es el paso más importante para mi cambio de carrera. El temario del curso esta muy bien pensado y la estructuracion ha sido muy bien ideada, yendo más allá de otros cursos. TeachTech me hizo sentir que siempre era un buen momento para aprender programación y que siempre estaban ahi cerca como familia, de esas que te impulsa a ser mejor profesional y personalmente. Me pareció muy completo todo el ciclo de aprendizaje en el que te involucras y comprometes por diez semanas, que se van sin que te percates porque logran mantener siempre el interés y la motivación en el alumno. El equipo de  organizadores, profesores y mentores es el equilibrio perfecto entre conocimientos, experiencia en el campo y calidad humana. Siempre llevaré conmigo lo que me enseñaron, les agradezco la oportunidad y los recomiendo al 200 %. ",
        author: "Alianna",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "Ha supuesto la oportunidad de conocer a personas que disfrutan con la programación, y que quieren que tod@s disfrutemos también. Es un gran proyecto del que formar parte.",
        author: "Mónica",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://lu6sx.csb.app/",
      },
      {
        testimonial:
          "Si empiezas de 0 es muy interesante, puedes aprender más o menos depende del tiempo que le dedique uno mismo, pero aprendes a nivel personal a no rendirte. A mí me sirvió mucho, y sobre todo... a conocer gente altruista que brilla por su ausencia en esta sociedad ¡Me alegro mucho de poder haber recibido la oportunidad de haberos conocido a todos!",
        author: "Diego",
        image: "default",
        role: "student",
        role: "Alumno - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-5cgrw",
      },
      {
        testimonial:
          "Para mí ha supuesto abrirme un mundo completamente nuevo y distinto que me parece fascinante. En un verano he conocido a profesionales geniales que han convertido en fácil lo difícil. Mi cabeza ha hecho clic y ahora quiero seguir formándome. Antes de empezar dudaba que con 37 años fuese capaz de seguir el ritmo de aprendizaje, ahora mismo estoy súper orgullosa de lo que he conseguido y me veo capaz de cualquier cosa. Voy a seguir trabajando duro y ojalá en unos años pueda volver, esta vez ayudando yo, como lo hicieron conmigo. El verano del 2021 lo recordaré siempre, como en el que TeachTech me dio fuerzas para ir a por todo. ",
        author: "Berta",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          "Aprender a programar era una idea que me rondaba la cabeza. Me apunté a algún curso pero no me fue bien. Una amiga me recomendó hacer este curso, y estoy muy contenta de haberlo hecho. He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          "Lo recomendaría con los ojos cerrados. Para mí fue un sueño hecho realidad. La organización del curso, las clases, el material de apoyo, los profesores y mentores son maravillosos. Realmente una atención al detalle espectacular, para que tengamos todo a tiempo y acomodándose a nuestra disponibilidad y necesidad. El ambiente también es muy agradable y son muy comprensivos, siempre motivando y contestándote a la hora que fuera (ya que conmigo teníamos una diferencia horaria de 6 horas). Sin dudas los mentores son de gran ayuda y están para responder todas nuestras dudas. Una atención personalizada que ni siquiera he visto en cursos pagos. Gracias chicos, realmente me encantó esta experiencia, la repetiría y sin dudas que la recomiendo, al igual que la filosofía del grupo de Teach T3ch! Gracias, gracias, gracias.",
        author: "Loana",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Es un gran curso, los profesores y los mentores son lo MÁS. He aprendido muchísimo más de lo que me imaginaba, y es que, con gente como ellos con tantas ganas de transmitir lo que hacen con esa ilusión es todo mucho más fácil. Sólo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        role: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
    ],
    colaborators: [
      {
        testimonial:
          "Nunca ha sido tan fácil ayudar a personas que están empezando en este maravilloso mundo de escribir código",
        author: "David",
        image: "default",
        role: "teacher",
        role: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial: "Testimonial 2",
        author: "Teacher 2",
        image: "default",
        role: "teacher",
        role: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial: "Testimonial 3",
        author: "Teacher 3",
        image: "default",
        role: "teacher",
        role: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial: "Testimonial 4",
        author: "Teacher 4",
        image: "default",
        role: "teacher",
        role: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial: "Testimonial 5",
        author: "Teacher 5",
        image: "default",
        role: "teacher",
        role: "Mentor y Profe",
        edition: "2021",
      },
    ],
  },
}
