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

import { React, type AllWidgetProps } from 'jimu-core'
import { sampleFunction1 } from 'widgets/shared-code/entry1'

const Widget = (props: AllWidgetProps<{}>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>A widget using a shared entry</p>
      <p>The shared code: { sampleFunction1() }</p>
    </div>
  )
}

export default Widget
