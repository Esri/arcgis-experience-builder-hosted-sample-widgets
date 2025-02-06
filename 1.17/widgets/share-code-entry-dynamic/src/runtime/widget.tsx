/* Copyright 2025 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { React, type AllWidgetProps, moduleLoader } from 'jimu-core'

const Widget = (props: AllWidgetProps<object>) => {
  const [module, setModule] = React.useState(null)

  React.useEffect(() => {
    moduleLoader.loadModule('widgets/shared-code/entry1', props.context.folderUrl).then((module) => {
      console.log('Module loaded:', module)
      setModule(module)
    })
  }, [])
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>A widget loading a shared entry dynamically</p>
      <p>The shared code: { module?.sampleFunction1() }</p>
    </div>
  )
}

export default Widget
