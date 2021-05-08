import ButtonSmall from '~/components/button/ButtonSmall'
import RoadmapBasicInfo from '~/components/roadmaps/RoadmapBasicInfo'
import SetGoal from '~/components/roadmaps/SetGoal'
import StepSection from '~/components/roadmaps/StepSection'

const createRoadmapsPage = () => {
  return (
    <div>
      <RoadmapBasicInfo />
      <StepSection />
      <SetGoal />
      <ButtonSmall text="保存" className="block mx-auto mt-40 mb-20" />
    </div>
  )
}

export default createRoadmapsPage
