

export function Footer({footerText}: {footerText: string}) {
  return (
    <div className="border-t border-gray-200 pt-8 text-center text-gray-700">
      <p>{footerText}</p>
    </div>
  )
}
