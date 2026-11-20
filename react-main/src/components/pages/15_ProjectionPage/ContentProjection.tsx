import ProjectionCard from './ProjectionCardComponent/ProjectionCard'

function ContentProjection() {
  return (
    <section className="page-card">
      <p className="eyebrow">Content projection</p>
      <h2>Component composition in React</h2>

      <p>
        The parent component provides content through props, while the child
        component decides where each part should be displayed.
      </p>

      {/* 1. No content */}
      <ProjectionCard />

      {/* 2. Title and main content */}
      <ProjectionCard title={<h3>User profile</h3>}>
        <div className="profile-content">
          <p>
            <strong>Name:</strong> Jane Smith
          </p>
          <p>
            <strong>Email:</strong> jane.smith@example.com
          </p>
          <p>
            <strong>Role:</strong> User
          </p>
        </div>
      </ProjectionCard>

      {/* 3. Actions only */}
      <ProjectionCard
        actions={
          <>
            <button type="button">Edit profile</button>
            <button type="button">View details</button>
          </>
        }
      />
    </section>
  )
}

export default ContentProjection
