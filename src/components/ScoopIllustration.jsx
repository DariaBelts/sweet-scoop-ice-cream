const CENTER_X = 100
const VIEW_HALF_WIDTH = 60
const CONE_HALF_WIDTH = 42
const CONE_HEIGHT = 100
const SCOOP_RADIUS = 50
const SCOOP_STEP = 54

// Fixed offsets (relative to scoop radius) keep toppings stable between renders
const TOPPING_SPOTS = [
  [-0.45, -0.2, 20],
  [0.05, -0.5, -35],
  [0.42, -0.25, 60],
  [-0.15, 0.1, 110],
  [0.3, 0.2, -15],
  [-0.5, 0.3, 45],
  [0.55, -0.05, 150],
  [-0.05, -0.2, 80],
  [0.1, 0.42, -60],
  [-0.3, -0.52, 10],
]

const SPRINKLE_COLORS = ['#f06f8f', '#5bc8a4', '#7aa7ff', '#ffc94d', '#b58cff']

function crossHatch(top) {
  const left = CENTER_X - CONE_HALF_WIDTH
  const slope = CONE_HALF_WIDTH / CONE_HEIGHT
  const segments = []

  for (let offset = 16; offset < CONE_HALF_WIDTH * 2; offset += 16) {
    // Parallel to the left edge: x = x0 + slope * t, meets right edge x = right - slope * t
    const x0 = left + offset
    const tRight = (CONE_HALF_WIDTH * 2 - offset) / (2 * slope)
    segments.push([x0, top, x0 + slope * tRight, top + tRight])

    // Mirror image, parallel to the right edge
    const x1 = CENTER_X + CONE_HALF_WIDTH - offset
    segments.push([x1, top, x1 - slope * tRight, top + tRight])
  }

  return segments
}

function Topping({ type, cx, cy, r, shade }) {
  const spots = TOPPING_SPOTS.map(([dx, dy, angle]) => ({
    x: cx + dx * r,
    y: cy + dy * r,
    angle,
  }))

  switch (type) {
    case 'sprinkles':
      return spots.map((spot, index) => (
        <rect
          key={index}
          x={spot.x - r * 0.09}
          y={spot.y - r * 0.028}
          width={r * 0.18}
          height={r * 0.056}
          rx={r * 0.028}
          fill={SPRINKLE_COLORS[index % SPRINKLE_COLORS.length]}
          transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`}
        />
      ))
    case 'chips':
      return spots.slice(0, 8).map((spot, index) => (
        <path
          key={index}
          d={`M${spot.x - r * 0.07} ${spot.y + r * 0.04} L${spot.x} ${spot.y - r * 0.07} L${spot.x + r * 0.07} ${spot.y + r * 0.04} Z`}
          fill="#3b2418"
          transform={`rotate(${spot.angle / 3} ${spot.x} ${spot.y})`}
        />
      ))
    case 'cookie':
      return spots.slice(0, 9).map((spot, index) => (
        <ellipse
          key={index}
          cx={spot.x}
          cy={spot.y}
          rx={r * (index % 3 === 0 ? 0.11 : 0.07)}
          ry={r * (index % 3 === 0 ? 0.08 : 0.05)}
          fill={index % 2 === 0 ? '#2e211b' : '#4a372d'}
          transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`}
        />
      ))
    case 'berries':
      return spots.slice(0, 7).map((spot, index) => (
        <g key={index} transform={`rotate(${spot.angle / 4} ${spot.x} ${spot.y})`}>
          <path
            d={`M${spot.x} ${spot.y + r * 0.09} C${spot.x - r * 0.1} ${spot.y}, ${spot.x - r * 0.08} ${spot.y - r * 0.08}, ${spot.x} ${spot.y - r * 0.06} C${spot.x + r * 0.08} ${spot.y - r * 0.08}, ${spot.x + r * 0.1} ${spot.y}, ${spot.x} ${spot.y + r * 0.09} Z`}
            fill="#e0445e"
          />
          <circle cx={spot.x - r * 0.025} cy={spot.y} r={r * 0.012} fill="#ffe1a8" />
          <circle cx={spot.x + r * 0.03} cy={spot.y + r * 0.02} r={r * 0.012} fill="#ffe1a8" />
        </g>
      ))
    case 'shavings':
      return spots.slice(0, 8).map((spot, index) => (
        <path
          key={index}
          d={`M${spot.x - r * 0.08} ${spot.y} q${r * 0.08} ${-r * 0.08} ${r * 0.16} 0`}
          stroke="#4a2a19"
          strokeWidth={r * 0.045}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`}
        />
      ))
    case 'chunks':
      return spots.slice(0, 7).map((spot, index) => (
        <rect
          key={index}
          x={spot.x - r * 0.06}
          y={spot.y - r * 0.06}
          width={r * 0.12}
          height={r * 0.12}
          rx={r * 0.03}
          fill={index % 2 === 0 ? '#f7931e' : '#ffbf3c'}
          transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`}
        />
      ))
    case 'drizzle':
      return (
        <g>
          <path
            d={`M${cx - r * 0.8} ${cy - r * 0.15} q${r * 0.2} ${-r * 0.35} ${r * 0.4} 0 t${r * 0.4} 0 t${r * 0.4} 0 t${r * 0.4} 0`}
            stroke={shade}
            strokeWidth={r * 0.1}
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={`M${cx - r * 0.6} ${cy + r * 0.25} q${r * 0.2} ${-r * 0.3} ${r * 0.4} 0 t${r * 0.4} 0 t${r * 0.4} 0`}
            stroke="#b8752f"
            strokeWidth={r * 0.07}
            strokeLinecap="round"
            fill="none"
          />
          {spots.slice(0, 6).map((spot, index) => (
            <rect
              key={index}
              x={spot.x}
              y={spot.y}
              width={r * 0.05}
              height={r * 0.05}
              fill="#ffffff"
              opacity="0.9"
              transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`}
            />
          ))}
        </g>
      )
    case 'specks':
      return spots.map((spot, index) => (
        <circle key={index} cx={spot.x} cy={spot.y} r={r * 0.022} fill="#5a3e2b" opacity="0.55" />
      ))
    default:
      return null
  }
}

function Scoop({ cx, cy, r, base, shade, topping, drips }) {
  const lipY = cy + r * 0.7
  const lipBumps = []
  for (let i = -4; i <= 4; i += 1) {
    lipBumps.push(cx + i * r * 0.22)
  }

  return (
    <g>
      {drips && (
        <g fill={shade}>
          <rect x={cx - r * 0.55} y={lipY} width={r * 0.2} height={r * 0.5} rx={r * 0.1} />
          <rect x={cx - r * 0.05} y={lipY} width={r * 0.18} height={r * 0.7} rx={r * 0.09} />
          <rect x={cx + r * 0.38} y={lipY} width={r * 0.18} height={r * 0.38} rx={r * 0.09} />
        </g>
      )}
      <circle cx={cx} cy={cy} r={r} fill={base} />
      <g fill={shade}>
        {lipBumps.map((x) => (
          <circle key={x} cx={x} cy={lipY} r={r * 0.19} />
        ))}
      </g>
      <path
        d={`M${cx - r * 0.72} ${cy + r * 0.25} Q${cx} ${cy + r * 0.6} ${cx + r * 0.72} ${cy + r * 0.25}`}
        stroke={shade}
        strokeWidth={r * 0.05}
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <Topping type={topping} cx={cx} cy={cy - r * 0.1} r={r} shade={shade} />
      <ellipse
        cx={cx - r * 0.45}
        cy={cy - r * 0.45}
        rx={r * 0.22}
        ry={r * 0.11}
        fill="#ffffff"
        opacity="0.5"
        transform={`rotate(-38 ${cx - r * 0.45} ${cy - r * 0.45})`}
      />
    </g>
  )
}

function ScoopIllustration({ scoops, cherry = false, className = '', title }) {
  const stackCount = scoops.length
  const topRadius = SCOOP_RADIUS - (stackCount - 1) * 4
  const coneTop =
    12 + (cherry ? 22 : 0) + topRadius + (stackCount - 1) * SCOOP_STEP + 18
  const height = coneTop + CONE_HEIGHT + 6
  const left = CENTER_X - CONE_HALF_WIDTH
  const right = CENTER_X + CONE_HALF_WIDTH
  const tipY = coneTop + CONE_HEIGHT
  const topScoopY = coneTop - 18 - (stackCount - 1) * SCOOP_STEP

  return (
    <svg
      className={className}
      viewBox={`${CENTER_X - VIEW_HALF_WIDTH} 0 ${VIEW_HALF_WIDTH * 2} ${height}`}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <ellipse cx={CENTER_X} cy={tipY + 2} rx={26} ry={4} fill="#5b3a29" opacity="0.08" />
      <path d={`M${left} ${coneTop} L${right} ${coneTop} L${CENTER_X} ${tipY} Z`} fill="#e9b872" />
      <g stroke="#c98d45" strokeWidth="2.4" strokeLinecap="round" opacity="0.75">
        {crossHatch(coneTop).map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <path
        d={`M${left} ${coneTop} L${CENTER_X} ${tipY}`}
        stroke="#d9a25c"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {scoops.map((scoop, index) => (
        <Scoop
          key={`${scoop.base}-${index}`}
          cx={CENTER_X}
          cy={coneTop - 18 - index * SCOOP_STEP}
          r={SCOOP_RADIUS - index * 4}
          base={scoop.base}
          shade={scoop.shade}
          topping={scoop.topping}
          drips={index === 0}
        />
      ))}

      {cherry && (
        <g>
          <path
            d={`M${CENTER_X + 2} ${topScoopY - topRadius - 8} q6 -14 18 -18`}
            stroke="#5b8a3a"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx={CENTER_X} cy={topScoopY - topRadius + 2} r={13} fill="#e03e5c" />
          <ellipse cx={CENTER_X - 4} cy={topScoopY - topRadius - 3} rx={4} ry={2.5} fill="#fff" opacity="0.6" />
        </g>
      )}
    </svg>
  )
}

export default ScoopIllustration
