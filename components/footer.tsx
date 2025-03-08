

export function Footer({footerText}: {footerText: string}) {
  return (
    <div className="pt-8 text-center text-gray-700">
      <p>{footerText}</p>
    </div>
  )
}
