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

/** @jsx jsx */
import { React, type AllWidgetProps, jsx } from 'jimu-core'

export default function Widget (props: AllWidgetProps<unknown>) {
  const [ma, setMa] = React.useState(null)
  const [err, setErr] = React.useState(null)

  React.useEffect(() => {
    import('./module-a').then(m => { setMa(m) }).catch(e => { setErr(e) })
  }, [])

  return (
    <div className="widget-demo jimu-widget m-2">
      {ma && <div>Module loaded, {ma.f1()}</div>}
      {err && <div>Load dynamic module error. {err.message}</div>}
    </div>
  )
}
