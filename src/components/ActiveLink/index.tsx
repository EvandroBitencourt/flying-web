import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter(); //pega a pagina que esta sendo acessa no momento ex: /sobre, /contato

  const className = asPath === rest.href ? activeClassName : "nav-link";
  //se a rota/pagina que estamos acessando for igual ao link que ela clicou entao ativamos o classname

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
