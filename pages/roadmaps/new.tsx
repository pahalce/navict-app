import RoadmapBasicInfo from '~/components/roadmaps/RoadmapBasicInfo'
import SetGoal from '~/components/roadmaps/SetGoal'
import StepSection from '~/components/roadmaps/StepSection'

const createRoadmapsPage = () => {
  return (
    <div>
      <RoadmapBasicInfo />
      <StepSection />
      <SetGoal />
    </div>
  )
}

export default createRoadmapsPage
