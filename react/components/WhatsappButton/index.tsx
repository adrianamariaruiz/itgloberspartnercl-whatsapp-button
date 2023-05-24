import React from 'react'
import PoropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formatMessage = message.replace(/ /g, '%20')
  console.log('mensaje formateado', formatMessage)

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formatMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            alt="logo de whatsapp"
            height={height}
            width={width}
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.PoropTypes = {
  logo: PoropTypes.string.isRequired,
  phone: PoropTypes.string.isRequired,
  message: PoropTypes.string,
  height: PoropTypes.number,
  width: PoropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'my-icon.png',
  phone: '3003111000',
  message: 'Te estás comunicando con lilipink',
  height: 50,
  width: 50,
}

WhatsappButton.schema = {
  title: 'Whatsapp button',
  type: 'object',
  properties: {
    logo: {
      title: 'whatsapp icon',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone',
      description: 'Add a number',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Add the message the customer will see',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'width',
      description: 'width logo',
      type: 'number',
    },
    height: {
      title: 'height',
      description: 'height logo',
      type: 'number',
    },
  },
}

export default WhatsappButton
