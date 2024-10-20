import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectBtn: React.FC<{ connectMessage: string }> = ({ connectMessage }) => {
  return (
    <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus ||
          authenticationStatus === 'authenticated');

      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            'style': {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <button onClick={openConnectModal} type="button" className="before:ease relative overflow-hidden border border-red-600 bg-red-600 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-500 hover:shadow-red-500/55 hover:before:-translate-x-60 rounded-xl px-3 py-2">
                  <span>{connectMessage}</span>
                </button>
              );
            }

            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
              );
            }

            return (
              <div className='bg-red-600 h-fit w-fit rounded-xl items-center overflow-hidden grid grid-cols-3'>
                <button
                  onClick={openChainModal}
                  style={{ display: 'flex', alignItems: 'center' }}
                  type="button"
                  className='bg-white h-full w-full text-red-700 font-bold px-2 py-1'
                >
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 12,
                        height: 12,
                        borderRadius: 999,
                        overflow: 'hidden',
                        marginRight: 4,
                      }}
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 12, height: 12 }}
                        />
                      )}
                    </div>
                  )}
                  {chain.name}
                </button>
                <button onClick={openAccountModal} type="button" className='h-full w-full text-white px-2 py-1 col-span-2 font-PW'>
                  {account.displayName}
                  {account.displayBalance
                    ? ` (${account.displayBalance})`
                    : ''}
                </button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
  )
}

export default ConnectBtn