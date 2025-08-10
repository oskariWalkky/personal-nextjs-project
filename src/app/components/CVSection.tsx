import cv from '@/app/data/cv.json';
import type { CVData } from '@/app/types/cv';

const data = cv as CVData;

function DateRange({ start, end }: { start?: string; end?: string }) {
  if (!start && !end) return null;
  return (
    <span className="text-sm text-gray-500">
      {start ?? ''}
      {start && end ? ' — ' : ''}
      {end ?? 'Present'}
    </span>
  );
}

export default function CVSection() {
  const { basics, skills, experience, projects, education } = data;

  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Curriculum Vitae</h2>
          {basics?.tagline && (
            <p className="text-gray-600 mt-1">{basics.tagline}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
            {basics?.location && <span>{basics.location}</span>}
            {basics?.email && (
              <a className="underline" href={`mailto:${basics.email}`}>
                {basics.email}
              </a>
            )}
            {basics?.website && (
              <a className="underline" href={basics.website} target="_blank">
                Website
              </a>
            )}
            {basics?.links?.map((l) => (
              <a key={l.url} className="underline" href={l.url} target="_blank">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((group) => (
                <div key={group.name} className="border rounded-lg p-4">
                  <div className="font-medium mb-1">{group.name}</div>
                  <div className="text-gray-700">{group.items.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={`${item.company}-${item.role}-${idx}`}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <div className="font-medium">{item.role}</div>
                    <span className="text-gray-600">• {item.company}</span>
                    {item.location && (
                      <span className="text-gray-500">({item.location})</span>
                    )}
                    <DateRange start={item.start} end={item.end} />
                  </div>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.name} className="border rounded-lg p-4">
                  <div className="font-medium">{p.name}</div>
                  {p.description && (
                    <p className="text-gray-700 mt-1">{p.description}</p>
                  )}
                  <div className="mt-2 text-sm text-gray-600">
                    {p.tech?.length ? p.tech.join(' • ') : null}
                  </div>
                  {p.link && (
                    <a
                      className="underline mt-2 inline-block"
                      href={p.link}
                      target="_blank"
                    >
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={`${e.school}-${i}`}>
                  <div className="font-medium">{e.school}</div>
                  {e.degree && <div className="text-gray-700">{e.degree}</div>}
                  <DateRange start={e.start} end={e.end} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
