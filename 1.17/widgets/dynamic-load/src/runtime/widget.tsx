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
