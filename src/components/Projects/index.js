import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const projects = [
  {
    title: "Hec's Music Review",
    url: 'https://music.hector-padilla.com/',
    type: 'Music criticism web app',
    description:
      'A dedicated home for album reviews, track notes, and honest music criticism, with live review stats and featured albums.',
    tags: ['Reviews', 'Music', 'Web app'],
  },
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            A small collection of things I have built, shipped, and keep making
            better.
          </p>
        </div>

        <div className="projects-list" aria-label="Projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__content">
                <p className="project-card__type">{project.type}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-card__tags" aria-label="Project tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <a
                className="project-card__link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </article>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
