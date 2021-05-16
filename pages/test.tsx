import React from 'react'
import SelectForm from '~/components/list/SelectForm'
const options = [
  { value: 'python begginer', label: 'Python入門' },
  { value: 'python intermediate', label: 'Python実践' }
]
const TestPage = () => {
  return (
    <div className="w-10/12 mx-auto text-$t4">
      <SelectForm
        options={options}
        placeHolder={'本の名前やサイトの名前を入力してみよう'}
      />
    </div>
  )
}

export default TestPage
