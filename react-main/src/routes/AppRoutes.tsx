import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import ChildPage from '../components/pages/ChildPage'
import HomePage from '../components/pages/00_HomePage/HomePage'
import ModelViewPage from '../components/pages/02_ModelViewPage/ModelViewPage'
import SectionLayout from '../components/pages/SectionLayout'
import SectionHomePage from '../components/pages/SectionHomePage'
import NotFoundPage from '../components/pages/01_NotFoundPage/NotFoundPage'
import EventPage from '../components/pages/03_EventPage/EventPage'
import InputDecoratorPage from '../components/pages/04_InputDecoratorPage/InputDecoratorPage'
import OutputParentPage from '../components/pages/05_OutputParentPage/OutputParentPage'
import ForPage from '../components/pages/06_ForPage/ForPage'
import IfPage from '../components/pages/07_IfPage/IfPage'
import ClassPage from '../components/pages/08_ClassPage/ClassPage'
import StylePage from '../components/pages/09_StylePage/StylePage'
import SwitchPage from '../components/pages/10_SwitchPage/SwitchPage'
import DateTimePage from '../components/pages/11_1_DateTimePagPage/DateTimePagPage'
import NumberPage from '../components/pages/11_2_NumberPage/NumberPage'
import StringPage from '../components/pages/11_3_StringPage/StringPage'
import JsonPage from '../components/pages/11_4_JsonPage/JsonPage'
import MathPage from '../components/pages/11_5_MathPage/MathPage'
import FormsPage from '../components/pages/12_1_1_FormsPage/FormsPage'
import UncontrolledFormsPage from '../components/pages/12_1_2_UncontrolledFormsPage/UncontrolledFormsPage'
import FormValidationPage from '../components/pages/12_2_FormValidationPage/FormValidationPage'
import DynamicFormPage from '../components/pages/12_3_DynamicFormPage/DynamicFormPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route element={<HomePage />}>
          <Route index element={<Navigate to="model-view" replace />} />
          <Route path="model-view" element={<ModelViewPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="input-decorator" element={<InputDecoratorPage />} />
          <Route path="output-parent" element={<OutputParentPage />} />
          <Route path="for" element={<ForPage />} />
          <Route path="if" element={<IfPage />} />
          <Route path="class" element={<ClassPage />} />
          <Route path="style" element={<StylePage />} />
          <Route path="switch" element={<SwitchPage />} />
          <Route path="datetime" element={<DateTimePage />} />
          <Route path="number" element={<NumberPage />} />
          <Route path="string" element={<StringPage />} />
          <Route path="json" element={<JsonPage />} />
          <Route path="math" element={<MathPage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route
            path="uncontrolled-forms"
            element={<UncontrolledFormsPage />}
          />
          <Route path="form-validation" element={<FormValidationPage />} />
          <Route path="dynamic-forms" element={<DynamicFormPage />} />

          <Route path="section" element={<SectionLayout />}>
            <Route index element={<SectionHomePage />} />
            <Route path="child" element={<ChildPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
